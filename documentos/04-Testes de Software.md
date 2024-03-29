# Planos de Testes de Software

## Qualidade de Software

Para garantir o sucesso e a qualidade do site desenvolvido, a equipe escolheu categorias e subcategorias da norma ISO/IEC 25010 para avaliar a qualidade do software:

- Funcionalidade (Adequação funcional e Precisão)
- Confiabilidade (Recuperabilidade)
- Eficiência (Comportamento em relação ao desempenho e Utilização de recursos)
- Usabilidade (Compreensibilidade, Atratividade e Conformidade)
- Manutenibilidade (Modificabilidade e Testabilidade)
- Portabilidade (Adaptabilidade)
- Segurança (Integridade, Autenticidade e Responsabilidade)
- Compatibilidade (Coexistência)

As métricas incluem taxas de sucesso na conclusão de desafios, tempo de resposta, consumo de recursos, taxa de retenção de usuários, conformidade com diretrizes, facilidade de modificação, cobertura de testes, compatibilidade com diferentes dispositivos e sistemas, segurança de dados, e conformidade com regulamentações de proteção de dados. Essas métricas ajudarão a equipe a avaliar e melhorar continuamente a qualidade da aplicação, permitindo que ela promova eficazmente hábitos sustentáveis e contribua para a preservação ambiental.

## Cenários de Testes

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.
 
## Evidências de Testes de Software

### Acessibilidade
Para testar os requisitos de acessibilidade, utilizamos features nativas da ferramenta _Storybook_. Optamos por incluir evidências de um grupo seleto de componentes, considerando o número alto de componentes utilizados no projeto. Os testes na íntegra podem ser visualizados ao rodar localmente o Storybook na máquina.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-golosinas-imports/assets/103083123/1ee7bfba-26ed-401a-b862-841a8e28c2ae)
Por exemplo, na imagem acima, o componente de botão atende com sucesso os requisitos de três testes de acessibilidade, que checam se o componente possui texto discernível, suficiente contraste, e controles interativos não aninhados (requisito para um bom funcionamento com leitores de tela).

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-golosinas-imports/assets/103083123/cb671ad1-21d1-42ee-9fce-97461e54b54e)
Na imagem acima, o componente `ProductBanner` atende de forma satisfatória os requisitos de 6 testes.

Mais evidências:
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-golosinas-imports/assets/103083123/849e404b-6567-48ab-b420-dff3640e1cbb)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-golosinas-imports/assets/103083123/1add8667-50d0-412d-9bfd-f7f348edf4c6)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-golosinas-imports/assets/103083123/28a38d33-720b-46c2-9a85-912f07beb529)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-golosinas-imports/assets/103083123/72a83ee7-ad2e-463d-b990-00e1c475e2b9)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-golosinas-imports/assets/103083123/b60802ea-3911-4cfe-b2bc-e69e65bc2d97)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-golosinas-imports/assets/103083123/f0739bbb-715f-4a70-958a-05ce1d304f14)

Para reproduzir os testes de acessibilidade de todos os componentes utilizados no projeto, navegar até a pasta `frontend` e rodar o comando `npm run storybook`. Esse comando vai iniciar a UI do storybook no localhost do computador.


Apresente imagens e/ou vídeos que comprovam que um determinado teste foi executado, e o resultado esperado foi obtido. Normalmente são screenshots de telas, ou vídeos do software em funcionamento.
