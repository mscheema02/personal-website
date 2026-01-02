## Personal Website (AWS Hosting)

- **AWS S3 (Frontend)**
  - Stores the static website files (e.g., React build output)
  - **Bucket:** `manvirsinghcheema.com`
  - **Region:** `us-east-2`

- **AWS Route 53**
  - DNS management for `manvirsinghcheema.com` and `www.manvirsinghcheema.com`
  - Points the domain to the CloudFront distribution

- **AWS CloudFront**
  - CDN that serves the S3 site through your custom domain
  - Two distributions: **Production** and **Staging** (each with its own `*.cloudfront.net` domain)
  - Provides global caching and faster content delivery

- **AWS Certificate Manager (ACM)**
  - Provides the SSL/TLS certificate for HTTPS (encrypted traffic)
