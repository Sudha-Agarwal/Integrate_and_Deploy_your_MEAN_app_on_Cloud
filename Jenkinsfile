pipeline {
    agent any

 tools {nodejs "nodeJS16"}
    stages {
        stage('check node version'){
            steps{
                bat 'node -v'
                bat 'npm -v'
            }

        }
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM',
                    branches: [[name: '*/main']],
                    userRemoteConfigs: [[url: 'https://github.com/Sudha-Agarwal/Integrate_and_Deploy_your_MEAN_app_on_Cloud.git']]
                ])
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('Mocha/restapi-testing') {
                    bat 'npm install'
                }                
            }
        }
        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Package') {
            steps {
                bat 'zip -r ../backend.zip .'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'backend.zip, frontend.zip', allowEmptyArchive: true
        }
    }
}
