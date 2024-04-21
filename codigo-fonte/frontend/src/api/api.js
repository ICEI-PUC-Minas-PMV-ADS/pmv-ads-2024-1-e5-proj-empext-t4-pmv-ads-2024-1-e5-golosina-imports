const PRODUCT_GRAPHQL_FIELDS = `
  sys {
    id
  }
  internalName
  productName
  productType
  price
  description
  image {
    url
  }
  alternativeText
  slug
`;

const CHARACTERISTICS_GRAPHQL_FIELDS = `
  sys {
    id
  }
  internalName
  firstCharacteristic
  secondCharacteristic
  thirdCharacteristic
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
    case "characteristics":
      graphqlFields = CHARACTERISTICS_GRAPHQL_FIELDS;
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
  console.log("Executando consulta GraphQL:", query);
  const accessToken = preview
    ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
    : process.env.CONTENTFUL_ACCESS_TOKEN;
  console.log("Token de acesso:", accessToken);
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
    }
  ).then((response) => {
    console.log("Resposta da consulta GraphQL:", response);
    return response.json();
  });
}


function extractEntries(fetchResponse, contentType) {
  switch (contentType) {
    case "product":
      return fetchResponse?.data?.productCollection?.items;
    case "characteristics":
      return fetchResponse?.data?.characteristicsCollection?.items;
    case "blogPost":
      return fetchResponse?.data?.blogPostCollection?.items;
    default:
      return [];
  }
}

export async function getAllEntries(
  contentType,
  limit = 3,
  isDraftMode = false
) {
  try {
    console.log(`Buscando entradas do tipo '${contentType}'...`);
    const graphqlFields = await getGraphQLFields(contentType, isDraftMode);
    console.log("Campos GraphQL:", graphqlFields);
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
    console.log("Query GraphQL:", query);
    const entries = await fetchGraphQL(query, isDraftMode);
    console.log(`Entradas do tipo '${contentType}' encontradas:`, entries);
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
    return extractEntries(entry, contentType)[0];
  } catch (error) {
    console.error("Erro ao buscar entrada:", error);
    return null;
  }
}
