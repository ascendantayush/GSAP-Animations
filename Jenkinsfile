pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t gsap-portfolio .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker stop gsap-container || true
                docker rm gsap-container || true

                docker run -d \
                    --name gsap-container \
                    -p 8081:80 \
                    gsap-portfolio
                '''
            }
        }

        stage('Verify') {
            steps {
                sh 'docker ps'
            }
        }
    }
}