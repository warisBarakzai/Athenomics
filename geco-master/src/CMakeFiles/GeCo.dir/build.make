# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.16

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/local/Cellar/cmake/3.16.4/bin/cmake

# The command to remove a file.
RM = /usr/local/Cellar/cmake/3.16.4/bin/cmake -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src

# Include any dependencies generated for this target.
include CMakeFiles/GeCo.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/GeCo.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/GeCo.dir/flags.make

CMakeFiles/GeCo.dir/geco.c.o: CMakeFiles/GeCo.dir/flags.make
CMakeFiles/GeCo.dir/geco.c.o: geco.c
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building C object CMakeFiles/GeCo.dir/geco.c.o"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -o CMakeFiles/GeCo.dir/geco.c.o   -c /Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/geco.c

CMakeFiles/GeCo.dir/geco.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing C source to CMakeFiles/GeCo.dir/geco.c.i"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/geco.c > CMakeFiles/GeCo.dir/geco.c.i

CMakeFiles/GeCo.dir/geco.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling C source to assembly CMakeFiles/GeCo.dir/geco.c.s"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/geco.c -o CMakeFiles/GeCo.dir/geco.c.s

CMakeFiles/GeCo.dir/mem.c.o: CMakeFiles/GeCo.dir/flags.make
CMakeFiles/GeCo.dir/mem.c.o: mem.c
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Building C object CMakeFiles/GeCo.dir/mem.c.o"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -o CMakeFiles/GeCo.dir/mem.c.o   -c /Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/mem.c

CMakeFiles/GeCo.dir/mem.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing C source to CMakeFiles/GeCo.dir/mem.c.i"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/mem.c > CMakeFiles/GeCo.dir/mem.c.i

CMakeFiles/GeCo.dir/mem.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling C source to assembly CMakeFiles/GeCo.dir/mem.c.s"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/mem.c -o CMakeFiles/GeCo.dir/mem.c.s

CMakeFiles/GeCo.dir/msg.c.o: CMakeFiles/GeCo.dir/flags.make
CMakeFiles/GeCo.dir/msg.c.o: msg.c
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/CMakeFiles --progress-num=$(CMAKE_PROGRESS_3) "Building C object CMakeFiles/GeCo.dir/msg.c.o"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -o CMakeFiles/GeCo.dir/msg.c.o   -c /Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/msg.c

CMakeFiles/GeCo.dir/msg.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing C source to CMakeFiles/GeCo.dir/msg.c.i"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/msg.c > CMakeFiles/GeCo.dir/msg.c.i

CMakeFiles/GeCo.dir/msg.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling C source to assembly CMakeFiles/GeCo.dir/msg.c.s"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/msg.c -o CMakeFiles/GeCo.dir/msg.c.s

CMakeFiles/GeCo.dir/common.c.o: CMakeFiles/GeCo.dir/flags.make
CMakeFiles/GeCo.dir/common.c.o: common.c
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/CMakeFiles --progress-num=$(CMAKE_PROGRESS_4) "Building C object CMakeFiles/GeCo.dir/common.c.o"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -o CMakeFiles/GeCo.dir/common.c.o   -c /Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/common.c

CMakeFiles/GeCo.dir/common.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing C source to CMakeFiles/GeCo.dir/common.c.i"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/common.c > CMakeFiles/GeCo.dir/common.c.i

CMakeFiles/GeCo.dir/common.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling C source to assembly CMakeFiles/GeCo.dir/common.c.s"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/common.c -o CMakeFiles/GeCo.dir/common.c.s

CMakeFiles/GeCo.dir/buffer.c.o: CMakeFiles/GeCo.dir/flags.make
CMakeFiles/GeCo.dir/buffer.c.o: buffer.c
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/CMakeFiles --progress-num=$(CMAKE_PROGRESS_5) "Building C object CMakeFiles/GeCo.dir/buffer.c.o"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -o CMakeFiles/GeCo.dir/buffer.c.o   -c /Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/buffer.c

CMakeFiles/GeCo.dir/buffer.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing C source to CMakeFiles/GeCo.dir/buffer.c.i"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/buffer.c > CMakeFiles/GeCo.dir/buffer.c.i

CMakeFiles/GeCo.dir/buffer.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling C source to assembly CMakeFiles/GeCo.dir/buffer.c.s"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/buffer.c -o CMakeFiles/GeCo.dir/buffer.c.s

CMakeFiles/GeCo.dir/levels.c.o: CMakeFiles/GeCo.dir/flags.make
CMakeFiles/GeCo.dir/levels.c.o: levels.c
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/CMakeFiles --progress-num=$(CMAKE_PROGRESS_6) "Building C object CMakeFiles/GeCo.dir/levels.c.o"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -o CMakeFiles/GeCo.dir/levels.c.o   -c /Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/levels.c

CMakeFiles/GeCo.dir/levels.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing C source to CMakeFiles/GeCo.dir/levels.c.i"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/levels.c > CMakeFiles/GeCo.dir/levels.c.i

CMakeFiles/GeCo.dir/levels.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling C source to assembly CMakeFiles/GeCo.dir/levels.c.s"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/levels.c -o CMakeFiles/GeCo.dir/levels.c.s

CMakeFiles/GeCo.dir/context.c.o: CMakeFiles/GeCo.dir/flags.make
CMakeFiles/GeCo.dir/context.c.o: context.c
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/CMakeFiles --progress-num=$(CMAKE_PROGRESS_7) "Building C object CMakeFiles/GeCo.dir/context.c.o"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -o CMakeFiles/GeCo.dir/context.c.o   -c /Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/context.c

CMakeFiles/GeCo.dir/context.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing C source to CMakeFiles/GeCo.dir/context.c.i"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/context.c > CMakeFiles/GeCo.dir/context.c.i

CMakeFiles/GeCo.dir/context.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling C source to assembly CMakeFiles/GeCo.dir/context.c.s"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/context.c -o CMakeFiles/GeCo.dir/context.c.s

CMakeFiles/GeCo.dir/bitio.c.o: CMakeFiles/GeCo.dir/flags.make
CMakeFiles/GeCo.dir/bitio.c.o: bitio.c
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/CMakeFiles --progress-num=$(CMAKE_PROGRESS_8) "Building C object CMakeFiles/GeCo.dir/bitio.c.o"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -o CMakeFiles/GeCo.dir/bitio.c.o   -c /Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/bitio.c

CMakeFiles/GeCo.dir/bitio.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing C source to CMakeFiles/GeCo.dir/bitio.c.i"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/bitio.c > CMakeFiles/GeCo.dir/bitio.c.i

CMakeFiles/GeCo.dir/bitio.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling C source to assembly CMakeFiles/GeCo.dir/bitio.c.s"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/bitio.c -o CMakeFiles/GeCo.dir/bitio.c.s

CMakeFiles/GeCo.dir/arith.c.o: CMakeFiles/GeCo.dir/flags.make
CMakeFiles/GeCo.dir/arith.c.o: arith.c
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/CMakeFiles --progress-num=$(CMAKE_PROGRESS_9) "Building C object CMakeFiles/GeCo.dir/arith.c.o"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -o CMakeFiles/GeCo.dir/arith.c.o   -c /Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/arith.c

CMakeFiles/GeCo.dir/arith.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing C source to CMakeFiles/GeCo.dir/arith.c.i"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/arith.c > CMakeFiles/GeCo.dir/arith.c.i

CMakeFiles/GeCo.dir/arith.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling C source to assembly CMakeFiles/GeCo.dir/arith.c.s"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/arith.c -o CMakeFiles/GeCo.dir/arith.c.s

CMakeFiles/GeCo.dir/arith_aux.c.o: CMakeFiles/GeCo.dir/flags.make
CMakeFiles/GeCo.dir/arith_aux.c.o: arith_aux.c
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/CMakeFiles --progress-num=$(CMAKE_PROGRESS_10) "Building C object CMakeFiles/GeCo.dir/arith_aux.c.o"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -o CMakeFiles/GeCo.dir/arith_aux.c.o   -c /Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/arith_aux.c

CMakeFiles/GeCo.dir/arith_aux.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing C source to CMakeFiles/GeCo.dir/arith_aux.c.i"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/arith_aux.c > CMakeFiles/GeCo.dir/arith_aux.c.i

CMakeFiles/GeCo.dir/arith_aux.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling C source to assembly CMakeFiles/GeCo.dir/arith_aux.c.s"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/arith_aux.c -o CMakeFiles/GeCo.dir/arith_aux.c.s

# Object files for target GeCo
GeCo_OBJECTS = \
"CMakeFiles/GeCo.dir/geco.c.o" \
"CMakeFiles/GeCo.dir/mem.c.o" \
"CMakeFiles/GeCo.dir/msg.c.o" \
"CMakeFiles/GeCo.dir/common.c.o" \
"CMakeFiles/GeCo.dir/buffer.c.o" \
"CMakeFiles/GeCo.dir/levels.c.o" \
"CMakeFiles/GeCo.dir/context.c.o" \
"CMakeFiles/GeCo.dir/bitio.c.o" \
"CMakeFiles/GeCo.dir/arith.c.o" \
"CMakeFiles/GeCo.dir/arith_aux.c.o"

# External object files for target GeCo
GeCo_EXTERNAL_OBJECTS =

GeCo: CMakeFiles/GeCo.dir/geco.c.o
GeCo: CMakeFiles/GeCo.dir/mem.c.o
GeCo: CMakeFiles/GeCo.dir/msg.c.o
GeCo: CMakeFiles/GeCo.dir/common.c.o
GeCo: CMakeFiles/GeCo.dir/buffer.c.o
GeCo: CMakeFiles/GeCo.dir/levels.c.o
GeCo: CMakeFiles/GeCo.dir/context.c.o
GeCo: CMakeFiles/GeCo.dir/bitio.c.o
GeCo: CMakeFiles/GeCo.dir/arith.c.o
GeCo: CMakeFiles/GeCo.dir/arith_aux.c.o
GeCo: CMakeFiles/GeCo.dir/build.make
GeCo: CMakeFiles/GeCo.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/CMakeFiles --progress-num=$(CMAKE_PROGRESS_11) "Linking C executable GeCo"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/GeCo.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/GeCo.dir/build: GeCo

.PHONY : CMakeFiles/GeCo.dir/build

CMakeFiles/GeCo.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/GeCo.dir/cmake_clean.cmake
.PHONY : CMakeFiles/GeCo.dir/clean

CMakeFiles/GeCo.dir/depend:
	cd /Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src /Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src /Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src /Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src /Users/wbarakzai/Documents/1.Spring20/Athenomics/geco-master/src/CMakeFiles/GeCo.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/GeCo.dir/depend

