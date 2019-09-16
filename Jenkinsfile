#!/usr/bin/groovy
@Library('k2glyph-shared@master') _ 

def imageTag= ""
def version=""

pipeline {
  agent {
    kubernetes {
      yamlFile 'ci/kubernetes-agent.yaml'
    }
  }
  environment {
    project_id="asia.gcr.io/staging-auzmor"
    artifact="forest-admin-portal"
    credentials_id="staging_auzmor"
  }
  stages {
    stage("Start") {
        steps {
            script {
                def git_hash=sh returnStdout:true, script:'git rev-parse HEAD'
                version="${git_hash.trim()}.${env.BUILD_NUMBER}"
                imageTag="${env.project_id}/${env.artifact}:${version}"
            }
        }
    }
    stage('Build') {
        steps {
            container('docker') {
                withDockerRegistry(credentialsId: "gcr:${credentials_id}", url: 'https://asia.gcr.io') {
                    sh "docker build -t ${imageTag} ."
                }
            }
        }
    }
    stage("Push") {
        when { anyOf { branch 'develop'; branch 'staging'; branch 'master' } }
        steps {
            container("docker") {
                withDockerRegistry(credentialsId: "gcr:${credentials_id}", url: 'https://asia.gcr.io') {
                    sh "docker push ${imageTag}"
                    sh "docker rmi --force ${imageTag}"
                }
            }
        }
    }

    stage("Deploy Dev") {
        when {
            branch "develop"
        }
        steps {
            container("gcloud") {
                withCredentials([file(credentialsId: 'staging', variable: 'staging')]) {
                    sh("gcloud auth activate-service-account --key-file=${staging}")
                    sh("gcloud container clusters get-credentials standard-cluster-1 --zone asia-south1-a --project staging-auzmor")
                }
                script {
                    sh "kubectl -n dev set image deployment.v1.apps/admin-portal 'admin-portal=${imageTag}'"
                }
            }
        }
    }
    stage("Deploy Staging") {
        when {
            branch "staging"
        }
        steps {
            sh "echo \"Staging deployment happen\""
        }
    }
    stage("Manual Promotion") {
        when {
            branch 'master'
        }
        steps {
            // we need a first milestone step so that all jobs entering this stage are tracked an can be aborted if needed
            milestone(1)
            // time out manual approval after ten minutes
            timeout(time: 10, unit: 'MINUTES') {
                input message: "Does Staging/ Sandbox look good?"
            }
            // this will kill any job which is still in the input step
            milestone(2)
        }
    }
    stage("Deploy Production") {
        when {
            branch 'master'
        }
        steps {
            sh "echo \"Production deployment happen\""
        }
    }
  }
}
