var expect = require('chai').expect;

var getField = require('../../../../middleware/field/getField');



describe('getField middleware ', function () {



  it('should set res.locals.field with a Field object from db', function (done) {

      const mw = getField({
        Field:{
          findOne: (p1,cb)=>{
              expect(p1).to.be.eql({_id:'13'})
              cb(null,'mockField');
          }
        }
      });

      const resMock={
          locals: {}
      };
      mw({
        params:{
            fieldID: '13'
        }
      },resMock,()=>{
        expect(resMock.locals).to.be.eql({field:'mockField'})
        done();
      });


  });

  it('should call next with error when there is a db problem', function (done) {

      const mw = getField({
        Field:{
          findOne: (p1,cb)=>{
              expect(p1).to.be.eql({_id:'13'})
              cb('dbError',null);
          }
        }
      });

      const resMock={
          locals: {}
      };
      mw({
        params:{
            fieldID: '13'
        }
      },resMock,(err)=>{
        expect(err).to.be.eql('dbError');
        done();
      });


  });


  it('should call next when no Field found in the db', function (done) {

      const mw = getField({
        Field:{
          findOne: (p1,cb)=>{
              expect(p1).to.be.eql({_id:'13'})
              cb(undefined,null);
          }
        }
      });

      const resMock={
          locals: {}
      };
      mw({
        params:{
            fieldID: '13'
        }
      },resMock,(err)=>{
          expect(err).to.be.eql(undefined);
        expect(resMock.locals).to.be.eql({})
        done();
      });


  });
});
