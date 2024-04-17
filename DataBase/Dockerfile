# Use a imagem oficial do MySQL
FROM mysql:latest

# Defina as variáveis de ambiente
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=contatos_data_base
ENV MYSQL_USER=cabeceiradev
ENV MYSQL_PASSWORD=Senha123

# Copie o script SQL de inicialização para o contêiner
COPY init.sql /docker-entrypoint-initdb.d/
