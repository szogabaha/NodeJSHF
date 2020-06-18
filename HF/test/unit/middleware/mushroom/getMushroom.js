var expect = require('chai').expect;

var getMushroom = require('../../../../middleware/mushroom/getMushroom');



describe('getMushroom middleware ', function () {



  it('should set res.locals.mushroom with a Mushroom object from db', function (done) {

      const mw = getMushroom({
        Mushroom:{
          findOne: (p1,cb)=>{
              expect(p1).to.be.eql({_id:'13'})
              cb(null,'mockMushroom');
          }
        }
      });

      const resMock={
          locals: {}
      };
      mw({
        params:{
            mushroomID: '13'
        }
      },resMock,()=>{
        expect(resMock.locals).to.be.eql({mushroom:'mockMushroom'})
        done();
      });


  });

  it('should call next with error when there is a db problem', function (done) {

      const mw = getMushroom({
        Mushroom:{
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
            mushroomID: '13'
        }
      },resMock,(err)=>{
        expect(err).to.be.eql('dbError');
        done();
      });


  });


  it('should call next when no Mushroom found in the db', function (done) {

      const mw = getMushroom({
        Mushroom:{
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
            mushroomID: '13'
        }
      },resMock,(err)=>{
          expect(err).to.be.eql(undefined);
        expect(resMock.locals).to.be.eql({})
        done();
      });


  });
});
