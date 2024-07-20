pipeline {
    agent any

    environment {
        // Ensure MongoDB connection URI matches your local setup
        MONGO_URL = 'mongodb://127.0.0.1:27017/testDB'
    }


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
                dir('Mocha/restapi-testing') {
                    bat 'npm test'
                }                
            }
        }
    }
    
}
