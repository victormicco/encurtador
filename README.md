

## Instruções para a correção do teste

Após clonar o repositório, o primeiro passo é:
Instalar os pacotes

```bash
pnpm install
ou
pnpm i
```

Depois, exclua a pasta do prisma que fica na root do projeto

- Após isso, inicie o prisma novamente para configura-lo
```bash
pnpx prisma init
```
Esse comando vai criar a pasta prisma novamente, e um arquivo .env na root do projeto.
-Agora, configure a env trocando o valor para o que foi enviado por whatsapp.
-> Sua env vai ficar parecida com isso:
```bash
DATABASE_URL="mysql://johndoe:randompassword@localhost:5432/database"
```
Após isso, troque o provider do seu schema.prisma, deixe-o assim:
```bash
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```
-----------------------------------------------------
Após essas mudanças rode o comando abaixo para puxar a tabela existente no nosso banco de dados:
```bash
pnpx prisma db pull
```
Isso irá criar um model no seu schema.prisma igua à esse:
```bash
model Domains {
  id        BigInt  @id @unique(map: "id") @default(autoincrement()) @db.UnsignedBigInt
  link      String  @db.Text
  linkShort String? @db.Text
}
```
Mude-o para a seguinte forma:
```bash
model domain {
  id                 Int    @id @default(autoincrement())
  link      String  @db.Text
  linkShort String? @db.Text

  @@map("Domains")
}
```
Após isso, rode o comando abaixo para atualizar as apis do prisma e suas funcionalidades:
```bash
pnpx prisma generate
```
-----------------------------------------------------
## Agora é só rodar o projeto em desenvolvimento.
```bash
pnpm dev
```
Após isso, abra localhost:3333/docs para abrir a documentação Swagger e verificar se está tudo funcionando...
-----------------------------------------------------------------
Feito com <3 by Victor Micco.
