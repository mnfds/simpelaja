<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class nilai_ukm extends Model
{
    use HasFactory;

    protected $table = "nilai_ukms";
    protected $guarded = ["id"];
}
