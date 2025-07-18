<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    protected $fillable = ['name', 'book_id'];

    public function author() {
        return $this->hasMany(Book::class);
    }
}
