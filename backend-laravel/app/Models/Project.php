<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $table = 'projects';

    protected $primaryKey = 'ProjectID';

    
    public $timestamps = true;

    protected $fillable = [
        'ProjectName',
        'ProjectDescription',
        'ProjectPhoto',
        'ProjectLive',
        'ProjectCode'
    ];
}
