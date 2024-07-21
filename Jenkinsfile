pipeline {
    agent any
    //agent { label 'salve-node1' }
    /*agent {
        node {
            label 'hdfgh'
            customWorkspace '/som/path'
        }
    }*/

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
        stage('Archive Artifacts'){
            steps{
                dir('Mocha/restapi-testing'){
                    archiveArtifacts artifacts: 'test-results.xml, coverage/**', allowEmptyArchive:true

                    //archiveArtifacts artifacts : 'mochawesome-report/**/*',allowEmptyArchive: true
                }
            }
        }
    }

    post{
        always{
            junit 'test-results.xml'
            /*emailext(
                to: 'sudha.agarwal84@gmail.com',
                subject: "Build ${env.BUILD_NUMBER} - ${currentBuild.currentResult}",
                body: """<p>Build ${env.BUILD_NUMBER} - ${currentBuild.currentResult}</p>
                <p><a href="${env.BUILD_URL}artifact/mochawesone-report/index.html">View Test Report</a></p>""",
                attachLog: true,*/
                //attachmentsPattern: 'mochawesome-report/**/*'
            //)
        }
    }      
       
}
