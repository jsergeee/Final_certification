<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['sku', 'name', 'category_id', 'price', 'photo_url'];

    protected $casts = [
        'sku' => 'integer' // Гарантируем числовой тип
    ];
}
