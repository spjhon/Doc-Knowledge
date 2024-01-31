# JavaScript Security

## [Articulo sobre Javascript y Seguridad](https://www.ifourtechnolab.com/blog/how-to-use-javascript-to-enhance-web-security-and-accessibility)

## [Un unsplash pero con AI, (mover de aca)](https://vavebg.com/)

## [Framework recomendado para native app EXPO](https://expo.dev/)

seguridad en transmison de datos

A strong and secure website can indeed utilize a REST API. However, it's important to note that the security of a website depends on various factors, and the use of a REST API is just one aspect of it.

When it comes to REST API security, there are several considerations:

Authentication: REST APIs often require authentication to ensure that only authorized users can access protected resources. Common authentication mechanisms include API keys, tokens (such as JSON Web Tokens), or OAuth for delegated authorization.

Authorization: Once a user is authenticated, the REST API needs to enforce authorization rules to determine what actions they can perform on specific resources. Role-based access control (RBAC) or access control lists (ACLs) are commonly used approaches.

Secure Communication: The communication between the client and the REST API should be encrypted using HTTPS (TLS/SSL) to protect sensitive data from eavesdropping and tampering.

Input Validation: The REST API should validate and sanitize user input to prevent common security vulnerabilities such as SQL injection, cross-site scripting (XSS), or cross-site request forgery (CSRF).

Rate Limiting: Implementing rate limiting mechanisms can prevent abuse and protect against denial-of-service (DoS) attacks by limiting the number of requests a client can make within a given time frame.

Data Protection: If the REST API handles sensitive data, appropriate measures such as encryption, data masking, or pseudonymization should be employed to protect the data at rest and in transit.

Additionally, regular security audits, vulnerability assessments, and adherence to security best practices are essential to maintain a strong and secure website.

While utilizing a REST API can help in designing scalable and loosely coupled systems, it's crucial to consider and implement security measures specific to your application and API to ensure the overall security of your website.
