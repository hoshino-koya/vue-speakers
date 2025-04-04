import App from "./app.js";
import UserRoute from "./routes/user.route.js";
import AuthRoute from "./routes/auth.route.js";
import AgentRoute from "./routes/agents.route.js";
import KnowledgeBaseRoute from "./routes/knowledgebase.route.js";
import WebhookRoute from "./routes/webhook.route.js";
import CheckoutRoute from "./routes/checkout.route.js";
import internalTest from "./test.js";
import SubscriptionRoute from "./routes/subscription.route.js";

const server = new App();

server.initializedRoutes([
  new UserRoute(),
  new AuthRoute(),
  new AgentRoute(),
  new KnowledgeBaseRoute(),
  new WebhookRoute(),
  new CheckoutRoute(),
  new SubscriptionRoute(),
]);
server.listen();

// Add a space between warning error coming from pdfjs
// for code readability
setTimeout(() => {
  internalTest();
  console.log("\n");
}, 100);
