<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class House extends Model
{
  protected $table = 'house';
  protected $guarded = ['id'];
}
