pipeline {
    agent any

    environment {
        MONGO_URL = 'mongodb://127.0.0.1:27017/testDB'
    }

    tools {
        nodejs "nodeJS16"
    }

    stages {
        stage('Check Node Version') {
            steps {
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
        
        stage('Parallel Execution') {
            parallel {
                stage('Install Dependencies') {
                    steps {
                        dir('Mocha/restapi-testing') {
                            bat 'npm install'
                        }
                    }
                }

                stage('Run Tests') {
                    steps {
                        dir('Mocha/restapi-testing') {
                            bat 'npm test'
                        }
                    }
                }
            }
        }
        
        stage('Archive Artifacts') {
            steps {
                dir('Mocha/restapi-testing') {
                    archiveArtifacts artifacts: 'mochawesome-report/**/*', allowEmptyArchive: true
                }
            }
        }
    }
    
    post {
        always {
            // Send email with build status
            emailext (
                to: 'sudhmangla@gmail.com', // Change this to your Gmail address
                subject: "Build ${env.BUILD_NUMBER} - ${currentBuild.currentResult}",
                body: """<p>Build ${env.BUILD_NUMBER} - ${currentBuild.currentResult}</p>
                         <p>Check the build details at: ${env.BUILD_URL}</p>
                         <p>Test Results:</p>
                         <p><a href="${env.BUILD_URL}artifact/mochawesome-report/index.html">View Test Report</a></p>""",
                attachLog: true,
                attachmentsPattern: 'mochawesome-report/**/*'
            )
        }
    }
}
