# Backend with Node js, Express, GraphQL

## Installation

```
$ npm install
```

## Running Locally

```
$ npm start
```

## [Docker] Build image

```
$ docker build -t eu.gcr.io/innovation-214316/innographql .
```

## Running Locally

```
$  docker run --env-file .env -p 8080:3000 eu.gcr.io/innovation-214316/innographql
```

## Push Image

```
$  docker push eu.gcr.io/innovation-214316/innographql
```

go to http://localhost:8080

### kubectl create secret

https://kubernetes.io/docs/concepts/configuration/secret/

```
kubectl apply -f ./k8s/inno-secret.yaml
```

```
kubectl describe secrets/inno-secret
```

```
kubectl get secret inno-secret -o yaml
```

```
kubectl create secret generic ibm-db-pass --from-file=./vcap.json
```

### kubectl create pod but NOT NECESSARY, USE DEPLOYMENT DIRECTLY

```
kubectl apply -f ./k8s/innographql-pod.yaml
```

### kubectl deployment

```
kubectl apply -f ./k8s/innographql-deployment.yaml

```

### kubectl expose

kubectl expose deployment innographql-deployment --type LoadBalancer --port 80 --target-port 3000

## Sample request

```
{
  pokemon(name:"Clefable"){
    name
    type1
    type2
    weight
    height
  },
  pokemons{
    name
    type1
    type2
    weight
    height
  },
  pokemonType(type:"Normal"){
    name
    type1
    type2
    weight
    height
  },
  pokemonType2(type:"Poison"){
    name
    type1
    type2
    weight
    height
  },
  mostHeaviest{
    name
  },
	mostLightest{
    name
  },
  mostTaller{
    name
    height
  },
  mostSmaller{
    name
    height
  }
}
```
