<?php

namespace App\Http\Controllers;

use App\Models\Link;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LinkController extends Controller
{


    public function get()
    {
        return Link::first();
    }
    // all are the same just update the basic links
    // to update the live video links
    public function savefb()
    {
        $link = Link::first();
        $link->fblink = request()->link;
        $link->user_id = Auth::user()->id;
        if ($link->save()) {
            return "true";
        } else {
            return "false";
        }
    }
    public function saveinsta()
    {

        $link = Link::first();
        $link->instalink = request()->link;
        $link->user_id = Auth::user()->id;
        if ($link->save()) {
            return "true";
        } else {
            return "false";
        }
    }
    public function savesnap()
    {

        $link = Link::first();
        $link->snaplink = request()->link;
        $link->user_id = Auth::user()->id;
        if ($link->save()) {
            return "true";
        } else {
            return "false";
        }
    }
    public function savetube()
    {

        $link = Link::first();
        $link->tubelink = request()->link;
        $link->user_id = Auth::user()->id;
        if ($link->save()) {
            return "true";
        } else {
            return "false";
        }
    }
}
