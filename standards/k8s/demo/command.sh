# Get context and use-context
kubectl config get-contexts
kubectl config use-context docker-desktop

# Display K8s version
kubectl version --client
kubectl version

# Listing the available nodes
kubectl get nodes

# Check that kubectl is properly configured by getting the cluster state
kubectl cluster-info
kubectl cluster-info dump
