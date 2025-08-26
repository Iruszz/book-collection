<?php

namespace Database\Seeders;

use App\Models\Book;
use App\Models\Review;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $books = Book::all();

        Review::factory()->count(50)
            ->make()
            ->each(function ($review) use ($books) {
                $review->book_id = $books->random()->id;
                $review->save();
            });
    }
}