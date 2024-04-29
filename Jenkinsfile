pipeline {
     environment {
        DOCKERHUB_CREDENTIALS = credentials('docker-hub-credentials')
        registry = 'chaimabouhlel/poke-store'
        registryCredential = 'docker-hub-credentials'
        dockerImage = ''
        dockerimagetag = 'v1'
    }
    agent any
     tools {
        nodejs 'node21'
    }
    stages {
        stage('Fetch Code') {
            steps {
                git branch: 'main', url: 'https://github.com/ChaimaBouhlel/devops-lab-kubernetes.git'
            }
        }
        stage('Build image') {
            steps{
                script {
                    dockerImage = docker.build("${registry}:${dockerimagetag}")
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
                        dockerImage.push()
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
                    sh 'kubectl set image deployment/pokestore-deployment pokestore-container=${dockerimagename}:${dockerimagetag}'
                }
            }
        }
    }
}