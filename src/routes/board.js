import express from "express";
import Board from "../../models/board";
import Comment from "../../models/comment";

const boardRouter = express.Router();

// Getting All
boardRouter.get("/", async (req, res) => {
  try {
    const boards = await Board.find().sort({ createdAt: "desc" });
    res.json(boards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// // Getting One
// boardRouter.get("/:id", getSubscriber, (req, res) => {
//   res.json(res.subscriber);
// });

// Creating One
boardRouter.post("/", async (req, res) => {
  const board = new Board({
    title: req.body.title,
    contents: req.body.contents,
    author: req.body.author,
  });
  try {
    const newBoard = await board.save();
    res.status(201).json(newBoard);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

boardRouter.post("/:id/comment", async (req, res) => {
  const comment = new Comment({
    author: req.body.author,
    contents: req.body.contents,
  });
  try {
    const newComment = await comment.save();
    const board = await Board.findByIdAndUpdate(
      { _id: req.params.id },
      { $push: { comments: newComment.id } }
    );
    res.status(201).json(board);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// // Updating One
// boardRouter.patch("/:id", getSubscriber, async (req, res) => {
//   if (req.body.name !== null) {
//     res.subscriber.name = req.body.name;
//   }
//   if (req.body.subscribedToChannel != null) {
//     res.subscriber.subscribedToChannel = req.body.subscribedToChannel;
//   }
//   try {
//     const updatedSubscriber = await res.subscriber.save();
//     res.json(updatedSubscriber);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // patch (update only things given from client) vs put (update all things at once)

// // Deleting One
// boardRouter.delete("/:id", getSubscriber, async (req, res) => {
//   try {
//     await res.subscriber.remove();
//     res.json({ message: "Deleted Subscriber" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// async function getSubscriber(req, res, next) {
//   let subscriber;
//   try {
//     subscriber = await Subscriber.findById(req.params.id);
//     if (subscriber === null) {
//       return res.status(404).json({ message: "Cannot find subscriber" });
//     }
//   } catch (err) {
//     return res.status(500).json({ message: err.message });
//   }

//   res.subscriber = subscriber;
//   next();
// }

export default boardRouter;
