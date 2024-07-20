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
                git 'https://github.com/Sudha-Agarwal/Integrate_and_Deploy_your_MEAN_app_on_Cloud.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('Mocha/rest-api-testing') {
                    sh 'npm install'
                }
                bat 'npm install -g @angular/cli'
            }
        }

        stage('Build') {
            steps {
                dir('frontend') {
                    bat 'ng build --configuration=production'
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
                dir('backend') {
                    bat 'zip -r ../backend.zip .'
                }
                dir('frontend/dist') {
                    bat 'zip -r ../../../frontend.zip .'
                }
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'backend.zip, frontend.zip', allowEmptyArchive: true
        }
    }
}
