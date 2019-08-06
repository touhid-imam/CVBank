<?php

namespace App\Http\Controllers\Admin;

use App\Category;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategoryController extends Controller
{


    public function index()
    {
        $categories = Category::latest()->get();

        return view('admin.category.index', compact('categories'));
    }


    public function store(Request $request)
    {
        $this->validate($request, [
            'name'      => 'required',
        ]);

        $category           = new Category();
        $category->name     = $request->name;
        $category->slug     = str_slug ($request->name);
        $category->save();

        Toastr::success('Category Successfully Saved', 'Success');
        return redirect ()->back ();
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name'      => 'required',
        ]);

        $category        = Category::findOrFail($id);
        $category->name  = $request->name;
        $category->slug  = str_slug ($request->name);
        $category->save();

        Toastr::success('Category Successfully Updated', 'Success');
        return redirect ()->back ();
    }


    public function destroy($id)
    {
        $category = Category::findOrFail($id);
        $category->delete();

        Toastr::success('Category Successfully Deleted', 'Success');
        return redirect ()->back ();
    }

}
