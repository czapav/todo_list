# todo_list
Todo list in node.js


Commands:
  app addTodo <todo> [group]         Add todo                       [aliases: a]
  app removeTodo <id>                Remove todo                    [aliases: r]
  app editTodo <id> [subject]        Edit todo                      [aliases: e]
  app changeStatus <id> <id_status>  Change status item. Options: 1 - Active; 2
                                     - Completed;                   [aliases: c]
  app allListTodo                    Show all todo list           [aliases: all]
  app activeListTodo                 Show active todo list        [aliases: act]
  app completedListTodo              Show completed todo list     [aliases: cmp]
  app filterGroup <group>            Filter for group               [aliases: f]
  app syncDownload                   Download todo list with Api    [aliases: d]
  app syncUpload                     Uploud todo list to Api        [aliases: u]
  app syncDelete                     Delete todo list with Api    [aliases: del]

Options:
  --help  Show help                                                    [boolean]