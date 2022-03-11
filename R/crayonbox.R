pkg.env <- new.env(parent=emptyenv())
pkg.env$messages <- c(
  "As you open the crayon box, you hear the cardboard creasing against each other. You then carefully lay each utensil on your desk...",
  "Good choice of colors -- says Jeremy...",
  "You open the crayon box under your desk to keep it hidden: no one will try to steal your favorites...",
  "Your desk is small -- but there is just enough space...",
  "As you open the crayon box, you aren't sure if these are the right colors...",
  "You place your eraser close by, but you don't remember them working well with crayons...",
  "My favourite color isn't here..."
)

#' @name crayons
#' @title crayons
#' @description During an interaction session, create a coloring tool in the Viewer for
#'   users to create different vectors of colors. Will copy directly to the user clipboard.
#' @export
crayons <- function(palette = "") {

  # Allow users to specify a wesanderson or RColorBrewer template that can be
  # directly uploaded into the HTML UI.

  # Each crayon box resides in its own temporary directory
  # Where the user can choose to have multiple active.
  # Users can actively add new plots to each crayon box to customize their plots.
  if(interactive()) {
    # Crayons is found in the list of packages.
    crayons_path = NULL
    for(i in 1:length(.libPaths)) {
      if(which(list.files(.libPaths()[i]) == "crayons") > 0) {
        crayons_path <- paste(.libPaths()[i], "/crayons", sep = "")
        break;
      }
    }

    tempDir <- tempfile()
    dir.create(tempDir)

    # Create the crayon box and initialize it with empty values.
    htmlFile <- file.path(tempDir, "crayons.html")

    file.copy(paste(crayons_path, "/www/crayons.html", sep = ""), htmlFile)
    file.copy(paste(crayons_path, "/www/eraser.png", sep = ""), file.path(tempDir, "eraser.png"))
    dir.create(paste(tempDir, "\\js", sep=""))
    dir.create(paste(tempDir, "\\css", sep=""))
    file.copy(paste(crayons_path, "/www/js/script.js", sep = ""), file.path(tempDir, "js/script.js"))
    file.copy(paste(crayons_path, "/www/css/style.css", sep = ""), file.path(tempDir, "css/style.css"))

    # Open the viewer for the user to use their crayon box.
    viewer <- getOption("viewer")
    viewer(htmlFile)

    message(pkg.env$messages[sample.int(8, 1)])
  }
}



#' @name get_plots
#' @title get_plots
#' @description Will get the current plots that have been made in
#'   the interactive R session -- helps facilitate what plots need to be customized.
#' @export
#' @returns A list of plot file names as full path.
get_plots <- function() {
  # Look at current temp directory.
  # See if it contains png files.
  # Grab those temp files.
  plots.dir.path <- list.files(tempdir(), pattern="rs-graphics", full.names = TRUE)
  plots.png.paths <- list.files(plots.dir.path, pattern=".png", full.names = TRUE)
  # Just return the full paths to the png files. These can be directly embedded into the html
  # so users can interact with it. Need to pass these to the html documents so users can edit it there.
  return(plots.png.paths)
}
