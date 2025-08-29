<?php

namespace App\Http\Controllers;

use App\Http\Resources\ReviewResource;
use App\Models\Review;
use Illuminate\Http\Request;
use App\Http\Requests\StoreReviewRequest;


class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return ReviewResource::collection(Review::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreReviewRequest $request)
    {
        $review = Review::create($request->validated());

        $reviews = Review::all();
        return ReviewResource::collection($reviews);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreReviewRequest $request, Review $review)
    {
        $review->update($request->validated());

        $reviews = Review::all();
        return ReviewResource::collection($reviews);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Review $review)
    {
        $review->delete();
        return response()->json(['message' => 'Review succesfully deleted']);
    }
}
