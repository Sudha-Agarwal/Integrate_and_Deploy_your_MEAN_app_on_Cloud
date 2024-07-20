pipeline {
    agent any

 tools {nodejs "node"}
    stages {
        stage('check node version'){
            steps{
                sh 'node -v'
                sh 'npm -v'
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
                sh 'npm install -g @angular/cli'
            }
        }

        stage('Build') {
            steps {
                dir('frontend') {
                    sh 'ng build --configuration=production'
                }
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Package') {
            steps {
                dir('backend') {
                    sh 'zip -r ../backend.zip .'
                }
                dir('frontend/dist') {
                    sh 'zip -r ../../../frontend.zip .'
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
