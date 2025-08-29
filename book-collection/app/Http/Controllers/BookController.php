<?php

namespace App\Http\Controllers;

use App\Http\Resources\BookResource;
use App\Models\Book;
use Illuminate\Http\Request;
use App\Http\Requests\StoreBookRequest;

use App\Http\Resources\ReviewResource;
use App\Models\Review;
use App\Http\Requests\StoreReviewRequest;

class BookController extends Controller
{
    public function index() {
        return BookResource::collection(Book::all());
    }

    public function store(StoreReviewRequest $request) {
        $book = Book::create($request->validated());

        $books = Book::all();
        return BookResource::collection($books);
    }

    public function show(StoreReviewRequest $request) {
        $review = Review::create($request->validated());

        $reviews = Review::all();
        return ReviewResource::collection($reviews);
    }

    public function update(StoreBookRequest $request, Book $book) {
        $book->update($request->validated());

        $books = Book::all();
        return BookResource::collection($books);
    }
    
    public function destroy(Book $book) {
        $book->delete();
        return response()->json(['message' => 'Book succesfully deleted']);
    }
}
