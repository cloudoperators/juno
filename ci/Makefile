# NOTE: 
# Hijack Build Container for debug
# fly -t v5 intercept -u URL_FROM_BUILD

FLY := fly -t v5
ci: ci-clean ci-create
	$(FLY) set-pipeline --pipeline juno-v3 -c pipeline.yaml -l ./vars.yaml

login:
	$(FLY) login -c https://ci1.eu-de-2.cloud.sap -n services

ci-clean: 
	if [ -e pipeline.yaml ]; then rm pipeline.yaml; fi

ci-create:
	docker run --rm -v "${CURDIR}":/myapp -w /myapp keppel.eu-de-1.cloud.sap/ccloud-dockerhub-mirror/library/ruby:3-alpine erb pipeline.yaml.erb > pipeline.yaml 

# Generate helm charts for hosting an app
# Usage: make generate-hosting NAME=dashboard PROPS='{"region": "eu-de-1"}'
# NAME is the name of the asset to be hosted
# PROPS is a json which will be passed to the asset script tag via data-props-*
PROPS ?= 
generate-hosting: ensure-name
	echo generate helm charts for hosting $(NAME) with PROPS $(PROPS)
	@echo "\033[92m * generate helm charts for hosting $(NAME) with PROPS $(PROPS)\033[0m"
	mkdir -p helm-charts/hosting/charts/$(NAME) && cp -r ./helm-charts/hosting/template/* helm-charts/hosting/charts/$(NAME)/
	find ./helm-charts/hosting/charts/$(NAME) -name '*.yaml' -exec sed -i 's%###NAME###%$(NAME)%g' {} \;
	find ./helm-charts/hosting/charts/$(NAME) -name '*.yaml' -exec sed -i 's%###PROPS###%$(PROPS)%g' {} \;

delete-hosting: ensure-name
	rm -rf ./helm-charts/hosting/charts/$(NAME)

ensure-name:
ifndef NAME
	$(error NAME is not set)
endif
