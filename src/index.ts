import express from 'express';
import { ArticleController } from './presentation/ArticleController';
const app = express();
const port = 3000;

app.use(express.json());

const articleController = ArticleController.instantiate();

app.post('/', (req, res) => articleController.create(req, res));
app.post('/publish/:id', (req, res) => articleController.publish(req, res));
app.post('/unpublish/:id', (req, res) => articleController.unpublish(req, res));

app.delete('/:id', (req, res) => articleController.delete(req, res));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
