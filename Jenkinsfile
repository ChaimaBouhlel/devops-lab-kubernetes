pipeline {
    environment {
        dockerimagename = "chaimabouhlel/poke-store"
        dockerimagetag = "v1"
        dockerImage = ''
    }
    agent any
     tools {
        nodejs 'node21'
    }
    stages {
        stage('Checkout Source') {
            steps {
                git 'https://github.com/ChaimaBouhlel/poke-store.git'
            }
        }
        stage('Build image') {
            steps{
                script {
                    dockerImage = docker.build("${dockerimagename}:${dockerimagetag}")
                }
            }
        }
        stage('Pushing Image') {
            environment {
                registryCredential = 'docker-hub-credentials'
            }
            steps{
                script {
                    docker.withRegistry( 'https://registry.hub.docker.com', registryCredential ) {
                        dockerImage.push dockerimagetag
                    }
                }
            }
        }
        stage('Run Ansible Playbook') {
            steps {
                script {      
                    // run the ansible playbook 
                    sh 'ansible-playbook AnsiblePlaybooks/kubernetes-environment-playbook.yaml'
                }
            }
        }

        stage('Deploying pokestore Application to Kubernetes') {
            steps {
                script {
                    sh 'kubectl set image deployment/pokestore-deployment pokestore-web-server=${dockerimagename}:${dockerimagetag}'
                }
            }
        }
    }
}