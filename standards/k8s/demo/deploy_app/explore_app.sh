# Get list pods
kubectl get pods

# Get pod name
kubectl get pods -o go-template --template '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}'

# Export Pod Name
export POD_NAME=$(kubectl get pods -o go-template --template '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}')

# View logs of container
kubectl logs $POD_NAME

# Exec command in container
kubectl exce $POD_NAME -- env

# Exec in container by bash
kubectl exec -it $POD_NAME -- bash
