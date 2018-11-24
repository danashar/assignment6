$(document).ready(function () {

    class MineCraft {

        constructor() {
            this.defMatrix = [
                ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
                ['sky', 'sky', 'sky', 'cloud', 'sky', 'cloud', 'sky', 'sky', 'sky', 'sky', 'cloud', 'cloud', 'sky', 'sky', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky'],
                ['sky', 'sky', 'cloud', 'cloud', 'cloud', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky'],
                ['sky', 'sky', 'cloud', 'cloud', 'cloud', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
                ['sky', 'sky', 'sky', 'cloud', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'cloud', 'sky', 'sky', 'sky', 'sky', 'cloud', 'sky', 'sky', 'sky', 'sky'],
                ['sky', 'sky', 'sky', 'sky', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'cloud', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky'],
                ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
                ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'leaf', 'leaf', 'leaf', 'sky', 'sky'],
                ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'leaf', 'leaf', 'leaf', 'sky', 'sky'],
                ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'leaf', 'leaf', 'leaf', 'sky', 'sky'],
                ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'tree', 'sky', 'sky', 'sky'],
                ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'tree', 'sky', 'sky', 'sky'],
                ['sky', 'sky', 'sky', 'leaf', 'leaf', 'leaf', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'rock', 'rock', 'sky', 'tree', 'sky', 'sky', 'rock'],
                ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass'],
                ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt'],
                ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt'],
                ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt'],
                ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt'],
                ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt'],
                ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt']
            ];
            this.currentTool = null;
            this.initGame();
            var that = this;

            $('.tool').click(function (handler) {
                that.setCurrentTool(handler.target.id);
            });

            $('.grid-item').click(function (handler) {
                that.changeTile(handler.target);
            });
        }
        updateTile(tile, newType) {
            tile = $(tile);
            tile.removeClass(tile.attr('data'));
            tile.addClass(newType);
            tile.attr('data', newType);


        }
        updateBox(newType) {
            var selectedType = $('#selectedTile');
            selectedType.removeClass(selectedType.attr('data'));
            selectedType.addClass(newType);
            selectedType.attr('data', newType);
        }

        changeTile(tile) {
            tile = $(tile);
            if (this.currentTool === null) {
                return;
            }

            if (this.currentTool === 'axe') {
                if (tile.attr('data') === 'leaf' || tile.attr('data') === 'tree') {
                    //update box
                    this.updateBox(tile.attr('data'));

                    //set element to sky
                    this.updateTile(tile, 'sky');


                }
                else {
                    this.invalidTileSelection();
                };

            }

            else if (this.currentTool === 'pickaxe') {
                if (tile.attr('data') === 'rock') {
                    //update box
                    this.updateBox(tile.attr('data'));

                    //set element to sky
                    this.updateTile(tile, 'sky');


                }
                else {
                    this.invalidTileSelection();
                };

            }

            else if (this.currentTool === 'shovel') {
                if (tile.attr('data') === 'grass' || tile.attr('data') === 'dirt') {
                    //update box
                    this.updateBox(tile.attr('data'));

                    //set element to sky
                    this.updateTile(tile, 'sky');


                }
                else {
                    this.invalidTileSelection();
                };

            }

            else if (this.currentTool === 'selectedTile') {

                //set element to current type
                this.updateTile(tile, $("#selectedTile").attr('data'));
                this.clearSelectedTileTool();
            }
        }

        clearSelectedTileTool(){
            //clear selected tool tile
            var classToRemove = $("#selectedTile").attr('data');
            $("#selectedTile").removeAttr('data');
            $("#selectedTile").removeClass(classToRemove);
            //clear selected tool
            this.currentTool = null;

        }

        setCurrentTool(newTool) {
            //firt check selected tile isn't empty
            if (newTool ==='selectedTile' && $("#selectedTile").attr('data') ==null){
                return;
            }

            this.currentTool = newTool;
            var selectedTool = handler.target.id;
            $('.tool').removeClass('selectedTool');
            if (selectedTool != 'selectedTile') {
                $('#' + selectedTool).addClass('selectedTool');
            }
        }

        invalidTileSelection() {
            var toolSelection = this.currentTool;
            $('#' + toolSelection).addClass('invalidSelection');
            setTimeout(function () {
                $('#' + toolSelection).removeClass('invalidSelection');
            }, 300);
        }



        initGame() {
            //clear html box 
            //reset all variables

            //paint game on screen

            var gridContainer = $('#grid-container');
            for (var i = 0; i < 20; i++) {
                for (var j = 0; j < 20; j++) {
                    var tile = $('<div/>');
                    tile.addClass('grid-item');
                    tile.addClass(this.defMatrix[i][j]);
                    tile.attr('data', this.defMatrix[i][j]);
                    //.click(mineCraft.clickBlock);
                    gridContainer.append(tile);

                }
            }
        }
    }

    var mineCraft = new MineCraft();

    $('.startBtn').click(hideOpening);
    function hideOpening() {
        $('#opening-screen').hide();
        $('#game').css('display', 'flex');
    }


});


