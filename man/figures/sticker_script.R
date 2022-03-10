library(hexSticker)

# Build for the crayons logo.
# Make sure the working directory is in ./crayons
# Check this with getwd()
sticker("./man/figures/crayon_box_logo.png", package = "crayons", p_size=20, s_x=1, s_y=.85,
        s_width=.65, s_height= 1, h_fill = "white", h_color = "#ffd21c",
        p_color = "black", filename="./man/figures/logo.png")
