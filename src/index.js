const { ApolloServer, gql } = require('apollo-server');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs: gql`
    type Cep {
      id: ID!
      cep: String!
      logradouro: String!
      complemento: String!
      bairro: String!
      localidade: String!
      uf: String!
      unidade: String!
      ibge: String!
      gia: String!
    }

    type Query {
      cep(cep: String!): Cep
    }
  `,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`);
});