pipeline {
    agent any

    stages {
        stage('Clonar el Repositorio'){
            steps {
                git branch: 'main', url: 'https://github.com/CAgudeloBetancur/proyecto-micro-servicio.git'
            }
        }
        stage('Construir imagen de Docker'){
            steps {
                script {
                    withCredentials([
                        string(credentialsId: 'MONGO_URI', variable: 'MONGO_URI')
                    ]) {
                        docker.build('camilo97/proyecto-micro-servicio:v1', '--build-arg MONGO_URI=${MONGO_URI} ./proyecto-micro')
                    }
                }
            }
        }
        stage('Desplegar contenedores Docker'){
            steps {
                script {
                    withCredentials([
                            string(credentialsId: 'MONGO_URI', variable: 'MONGO_URI')
                    ]) {
                        sh 'docker-compose up -d'
                    }
                }
            }
        }
    }

    post {
        always {
            emailext (
                subject: "Status del build: ${currentBuild.currentResult}",
                body: "Se ha completado el build. Puede detallar en: ${env.BUILD_URL}",
                to: "laura.blandonm@est.iudigital.edu.co",
                from: "jenkins@iudigital.edu.co"
            )
        }
    }
}
