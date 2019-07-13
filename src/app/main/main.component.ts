import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import * as $ from 'jquery';
import { DataService } from '../data.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  movies: any;
  dataTable: any;
  SingleMovie: any;
  constructor(
    private store: Store<fromStore.ProductsState>,
    private MovieService: DataService
  ) {}

  ngOnInit() {
    this.MovieService.getSingleMovie('Starz Studios: After Earth').subscribe(
      d => console.log(d)
    );
    this.store.dispatch(new fromStore.LoadMovies());

    this.store.select<any>('products').subscribe(state => {
      console.log(state.Movies.data.results);
      this.movies = state.Movies.data.results;
    });

    $(document).ready(function() {
      $.noConflict();
      setTimeout(function() {
        $('#MoviesDataTable thead tr').clone(true).appendTo( '#MoviesDataTable thead' );
        $('#MoviesDataTable thead tr:eq(1) th').each( function (i) {
            var title = $(this).text();
            $(this).html(`<input type="text" value="" id=${title}  placeholder="Search ${title}" />` );
            $( 'input', this ).on( 'keyup change', function () {
              if ( table.column(i).search() !== $('#' + title).val()) {
                var valueOfSearch = $('#' + title).val();
                if(this.id.includes("placeholder")){
                  $(`${this.id}`).css({'display':'none'});
                }
                table
                    .column(i)
                    .search(String( valueOfSearch))
                    .draw();
            }
          } );
      } );
     
    //  .css({'display':'none'}));
  //  $('#placeholder="Search"').val("ayy")
        var table = $('#MoviesDataTable').DataTable({
          data: this.movies,
          pageLength: 10,
          processing: true,
          orderCellsTop: true,
          columns: [
            {
              orderable: false,
              data: 'null',
              defaultContent: ''
            },
            { data: 'title' },
            { data: 'vote_average' },
            { data: 'id' },
            { data: 'release_date' },
            {
              orderable: false,
              data: 'overview',
              defaultContent: ''
            }
          ],
          order: [[1, 'asc']]
        });
        function addDataRow(d) {
          return (
            '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
            '<tr>' +
            '<td>Overview:</td>' +
            '<td>' +
            d.overview +
            '</td>' +
            '</tr>' +
            '</table>'
          );
        }

        $('#MoviesDataTable tbody').on('click', 'td:first-child', function() {
          var tr = $(this).closest('tr');
          var row = table.row(tr);
          if (row.child.isShown()) {
            row.child.hide();
            tr.removeClass('shown');
          } else {
            row.child(addDataRow(row.data())).show();
            console.log(row.data());
            tr.addClass('shown');
          }
        });

      }, 50);
    });
  }
}
