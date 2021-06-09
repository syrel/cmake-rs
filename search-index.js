var searchIndex = JSON.parse('{\
"cmake":{"doc":"A build dependency for running <code>cmake</code> to build a native …","t":[3,5,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["Config","build","get_profile","new","pic","generator","cflag","cxxflag","asmflag","define","register_dep","target","no_build_target","host","out_dir","profile","static_crt","configure_arg","build_arg","env","build_target","uses_cxx11","always_configure","very_verbose","init_c_cfg","init_cxx_cfg","build","from","into","borrow","borrow_mut","try_from","try_into","type_id"],"q":["cmake","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["Builder style configuration for a pending CMake build.","Builds the native library rooted at <code>path</code> with the default …","Return explicitly set profile or infer <code>CMAKE_BUILD_TYPE</code> …","Creates a new blank set of configuration to build the …","Sets flag for PIC. Otherwise use cc::Build platform …","Sets the build-tool generator (<code>-G</code>) for this compilation.","Adds a custom flag to pass down to the C compiler, …","Adds a custom flag to pass down to the C++ compiler, …","Adds a custom flag to pass down to the ASM compiler, …","Adds a new <code>-D</code> flag to pass to cmake during the generation …","Registers a dependency for this compilation on the native …","Sets the target triple for this compilation.","Disables the cmake target option for this compilation.","Sets the host triple for this compilation.","Sets the output directory for this compilation.","Sets the <code>CMAKE_BUILD_TYPE=build_type</code> variable.","Configures whether the /MT flag or the /MD flag will be …","Add an argument to the <code>cmake</code> configure step","Add an argument to the final <code>cmake</code> build step","Configure an environment variable for the <code>cmake</code> processes …","Sets the build target for the final <code>cmake</code> build step, …","Alters the default target triple on OSX to ensure that …","Forces CMake to always run before building the custom …","Sets very verbose output.","Initializes the C build configuration.","Initializes the C++ build configuration.","Run this configuration, compiling the library with all …","","","","","","",""],"i":[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"f":[null,[[["asref",8],["path",3]],["pathbuf",3]],[[],["str",15]],[[["asref",8],["path",3]],["config",3]],[[["bool",15]],["config",3]],[[["osstr",3],["asref",8]],["config",3]],[[["osstr",3],["asref",8]],["config",3]],[[["osstr",3],["asref",8]],["config",3]],[[["osstr",3],["asref",8]],["config",3]],[[],["config",3]],[[["str",15]],["config",3]],[[["str",15]],["config",3]],[[["bool",15]],["config",3]],[[["str",15]],["config",3]],[[["asref",8],["path",3]],["config",3]],[[["str",15]],["config",3]],[[["bool",15]],["config",3]],[[["osstr",3],["asref",8]],["config",3]],[[["osstr",3],["asref",8]],["config",3]],[[],["config",3]],[[["str",15]],["config",3]],[[],["config",3]],[[["bool",15]],["config",3]],[[["bool",15]],["config",3]],[[["build",3]],["config",3]],[[["build",3]],["config",3]],[[],["pathbuf",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]]],"p":[[3,"Config"]]}\
}');
initSearch(searchIndex);