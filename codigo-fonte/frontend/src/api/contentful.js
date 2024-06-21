const PRODUCT_GRAPHQL_FIELDS = `
sys {
  id
}
internalName
productName
productType
price
description
alternativeText
slug
image {
  url
}
characteristicsCollection {
  items {
    information
  }
}
`;

const BLOG_POST_GRAPHQL_FIELDS = `
  sys {
    id
  }
  internalName
  title
  subtitle
  description
  image {
    url
  }
  slug
  alternativeText
  content {
    json
    links {
      entries {
        block {
          sys {
            id
          }
        }
        hyperlink {
          sys {
            id
          }
        }
        inline {
          sys {
            id
          }
        }
      }
    }
  }
  author
  category
  dateOfPublication
`;

async function getGraphQLFields(contentType, preview = false) {
  let graphqlFields;
  switch (contentType) {
    case "product":
      graphqlFields = PRODUCT_GRAPHQL_FIELDS;
      break;
    case "blogPost":
      graphqlFields = BLOG_POST_GRAPHQL_FIELDS;
      break;
    default:
      break;
  }
  return graphqlFields;
}

async function fetchGraphQL(query, preview = false) {
  const accessToken = preview
    ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
    : process.env.CONTENTFUL_ACCESS_TOKEN;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };

  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ query }),
      next: {
        revalidate: 3600,
      },
    }
  ).then((response) => {
    return response.json();
  });
}

function extractEntries(fetchResponse, contentType) {
  switch (contentType) {
    case "product":
      return fetchResponse?.data?.productCollection?.items;
    case "blogPost":
      return fetchResponse?.data?.blogPostCollection?.items;
    default:
      return [];
  }
}

export async function getAllEntries(
  contentType,
  limit = 100,
  isDraftMode = false
) {
  try {
    const graphqlFields = await getGraphQLFields(contentType, isDraftMode);
    const query = `query {
      ${contentType}Collection(
        where: { slug_exists: true },
        limit: ${limit},
        preview: ${isDraftMode ? "true" : "false"}
      ) {
        items {
          ${graphqlFields}
        }
      }
    }`;
    const entries = await fetchGraphQL(query, isDraftMode);
    return extractEntries(entries, contentType);
  } catch (error) {
    console.error("Erro ao buscar entradas:", error);
    return [];
  }
}

export async function getEntry(contentType, slug, isDraftMode = false) {
  try {
    const graphqlFields = await getGraphQLFields(contentType, isDraftMode);
    const entry = await fetchGraphQL(
      `query {
        ${contentType}Collection(
          where: { slug: "${slug}" },
          limit: 1,
          preview: ${isDraftMode ? "true" : "false"}
        ) {
          items {
            ${graphqlFields}
          }
        }
      }`,
      isDraftMode
    );

    const characteristicsData =
      entry.data?.[
        `${contentType}Collection`
      ]?.items?.[0]?.characteristicsCollection?.items.map((item) => {
        return {
          information: item.information,
        };
      }) || [];

    return {
      ...extractEntries(entry, contentType)[0],
      characteristics: characteristicsData,
    };
  } catch (error) {
    console.error("Erro ao buscar entrada:", error);
    return null;
  }
}
