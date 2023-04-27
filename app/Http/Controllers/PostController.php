<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    //


    public function get()
    {
        return response()->json(
            Post::where("type", request()->type)->get()
        );
    }
    public function save()
    {
        $post = new Post();
        $post->title = request()->title;
        $post->body = request()->body;
        $post->type = request()->type;
        //  need to upload img file in the system folders
        $path = "";
        if (!empty(request()->img) && request()->img != "0") {
            $location = '/images';
            if (request()->hasFile('img')) {
                if (request()->file('img')->isValid()) {
                    $path = request()->file('img')->store($location, 'public');
                }
            }
        }
        $post->img = $path;
        $post->user_id = Auth::user()->id;
        if ($post->save()) {
            return "true";
        } else {
            return "false";
        }
    }
    public function delete()
    {
        $post = Post::find(request()->id);
        if (!is_null($post) && $post->delete()) {
            return "true";
        } else {
            return "false";
        }
    }
}
