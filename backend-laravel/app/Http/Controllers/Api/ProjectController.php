<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects = Project::all();

        foreach ($projects as $p) {
            $p->ProjectPhoto = asset('storage/projects/' . $p->ProjectPhoto);
        }

        return response()->json(compact('projects'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();

        if ($request->hasFile('ProjectPhoto')) {
            $file = $request->file('ProjectPhoto');
            $filename = time() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('storage/projects'), $filename);

            $data['ProjectPhoto'] = $filename;
        }

        $project = Project::create($data);

        return response()->json([
            'message' => 'Project created successfully',
            'project' => $project
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $project = Project::find($id);

        if (!$project) {
            return response()->json(['message' => 'Not found'], 404);
        }

        $project->ProjectPhoto = asset('storage/projects/' . $project->ProjectPhoto);

        return response()->json(['project' => $project]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }



    /**
     * Update the specified resource in storage.
     */


    public function update(Request $request, $id)
    {
        $project = Project::find($id);

        if (!$project) {
            return response()->json(['message' => 'Not found'], 404);
        }

        $data = $request->except(['ProjectPhoto']);

        // upload photo
        if ($request->hasFile('ProjectPhoto')) {
            $file = $request->file('ProjectPhoto');
            $filename = time() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('storage/projects'), $filename);

            $data['ProjectPhoto'] = $filename;
        }

        $project->update($data);

        return response()->json([
            'message' => 'Project updated successfully',
            'project' => $project
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $project = Project::find($id);

        if (!$project) {
            return response()->json(['message' => 'Not found'], 404);
        }

        $project->delete();

        return response()->json([
            'message' => 'Deleted successfully'
        ]);
    }
}
