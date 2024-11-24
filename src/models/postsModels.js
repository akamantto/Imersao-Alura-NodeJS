import { ObjectId } from "mongodb";
import 'dotenv/config';
import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts(){
    const db = conexao.db("imersao-Instabyte");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}

export async function criarPost(novoPost) {
    const db = conexao.db("imersao-Instabyte");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, post) {
    const objId = ObjectId.createFromHexString(id);
    const db = conexao.db("imersao-Instabyte");
    const colecao = db.collection("posts");
    return colecao.updateOne({_id: new ObjectId(objId)}, {$set:post});
}