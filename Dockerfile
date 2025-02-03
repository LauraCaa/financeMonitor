FROM "node"
WORKDIR "/opt/finance-monitor"
COPY . ./
COPY package*.json .
RUN npm i
EXPOSE "3000"
CMD ["sleep", "infinity"]
