# ---------- build stage ----------
FROM maven:3.9.4-eclipse-temurin-21 AS build
WORKDIR /workspace
COPY pom.xml .
RUN mvn -B dependency:go-offline
COPY src ./src
RUN mvn -B -DskipTests package

# ---------- runtime stage ----------
FROM eclipse-temurin:21-jre-jammy
WORKDIR /app
COPY --from=build /workspace/target/*.jar app.jar
EXPOSE 8090
ENTRYPOINT ["sh", "-c", "java -Dserver.address=0.0.0.0 -Dserver.port=${PORT:-8090} -jar /app/app.jar"]
