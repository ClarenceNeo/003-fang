<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApiController extends Controller
{
  public function __construct($model)
  {
      $model = '\App\\' . ucfirst($model);
      $this->model = new $model;
  }

  public function add()
  {
      if(!$title = request('title'))
          return err('require:title');
      return
          $this->model->fill(request()->toArray())->save() ?
              suc($this->model->id) :
              err('internal_error');
  }

  public function search()
  {
      $like = request('like');
      return suc($this->model->where('title', 'like', "%$like%")->get());
  }

  public function read()
  {
    if ($id = request('id'))
      return suc($this->model->find($id));
    return suc($this->model->get());
  }
}
