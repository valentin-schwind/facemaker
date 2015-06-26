/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 */

THREE.OrbitControls = function ( object, domElement ) {

    this.object = object;
    this.domElement = ( domElement !== undefined ) ? domElement : document;

    // API

    this.enabled = true;

    this.center = new THREE.Vector3();

   
    this.userRotate = true;
    this.userRotateSpeed = 1.0;

   
	this.minThetaAngle = -Math.PI/5; //radians (von mitte nach links)
	this.maxThetaAngle = Math.PI/5;  //radians (von mitte nach rechts)
   

    this.minPolarAngle = 24*Math.PI/50; // radians (oben 0 unten PI)
    this.maxPolarAngle = 27*Math.PI/50; // radians (oben 0 unten PI)

    // ohne oben-unten Bewegung
    // this.minPolarAngle = 1*Math.PI/2; // radians (oben 0 unten PI)
    // this.maxPolarAngle = 1*Math.PI/2; // radians (oben 0 unten PI)


    // internals

    var scope = this;

    var EPS = 0.000001;
    var PIXELS_PER_ROUND = 1800;

    var rotateStart = new THREE.Vector2();
    var rotateEnd = new THREE.Vector2();
    var rotateDelta = new THREE.Vector2();

   

    var phiDelta = 0;
    var thetaDelta = 0;
    var scale = 1;

    var lastPosition = new THREE.Vector3();

    var STATE = { NONE: -1, ROTATE: 0 };
    var state = STATE.NONE;
	
	

    // events

    var changeEvent = { type: 'change' };


    this.rotateLeft = function ( angle ) {

       
		
		thetaDelta -= angle;
		

        

    };

    this.rotateRight = function ( angle ) {

        

        thetaDelta += angle;

    };

    this.rotateUp = function ( angle ) {

       

        phiDelta -= angle;

    };

    this.rotateDown = function ( angle ) {

        

        phiDelta += angle;

    };



    this.update = function () {

        var position = this.object.position;
        var offset = position.clone().sub( this.center );

        // angle from z-axis around y-axis

        var theta = Math.atan2( offset.x, offset.z );

        // angle from y-axis

        var phi = Math.atan2( Math.sqrt( offset.x * offset.x + offset.z * offset.z ), offset.y );

        

        theta += thetaDelta;
        phi += phiDelta;

        // restrict phi to be between desired limits
        phi = Math.max( this.minPolarAngle, Math.min( this.maxPolarAngle, phi ) );

        // restrict phi to be between EPS and PI-EPS
        phi = Math.max( EPS, Math.min( Math.PI - EPS, phi ) );
		
		// restict theta to be between desired limits
		theta = Math.max (this.minThetaAngle, Math.min(this.maxThetaAngle, theta));

        var radius = offset.length() * scale;

        

        offset.x = radius * Math.sin( phi ) * Math.sin( theta );
        offset.y = radius * Math.cos( phi );
        offset.z = radius * Math.sin( phi ) * Math.cos( theta );

		
		
		
		
        
		
		position.copy( this.center ).add( offset );
        this.object.lookAt( this.center );

        thetaDelta = 0;
        phiDelta = 0;
        scale = 1;

        if ( lastPosition.distanceTo( this.object.position ) > 0 ) {

            this.dispatchEvent( changeEvent );

            lastPosition.copy( this.object.position );

        }

    };


   

  

    function onMouseDown( event ) {

        if ( scope.enabled === false ) return;
        if ( scope.userRotate === false ) return;

        event.preventDefault();

        if ( event.button === 0 ) {

            state = STATE.ROTATE;

            rotateStart.set( event.clientX, event.clientY );

        } else if ( event.button === 1 ) {

            state = STATE.ROTATE;
			
			rotateStart.set( event.clientX, event.clientY );

            
        } else if ( event.button === 2 ) {

            state = STATE.ROTATE;
			
			rotateStart.set( event.clientX, event.clientY );

        }

        document.addEventListener( 'mousemove', onMouseMove, false );
        document.addEventListener( 'mouseup', onMouseUp, false );

    }

    function onMouseMove( event ) {

        if ( scope.enabled === false ) return;

        event.preventDefault();

        if ( state === STATE.ROTATE ) {

            rotateEnd.set( event.clientX, event.clientY );
            rotateDelta.subVectors( rotateEnd, rotateStart );

            scope.rotateLeft( 2 * Math.PI * rotateDelta.x / PIXELS_PER_ROUND * scope.userRotateSpeed );
            scope.rotateUp( 2 * Math.PI * rotateDelta.y / PIXELS_PER_ROUND * scope.userRotateSpeed );

            rotateStart.copy( rotateEnd );

        } 
	

    }

    function onMouseUp( event ) {

        if ( scope.enabled === false ) return;
        if ( scope.userRotate === false ) return;

        document.removeEventListener( 'mousemove', onMouseMove, false );
        document.removeEventListener( 'mouseup', onMouseUp, false );

        state = STATE.NONE;

    }

    

    

    this.domElement.addEventListener( 'contextmenu', function ( event ) { event.preventDefault(); }, false );
    this.domElement.addEventListener( 'mousedown', onMouseDown, false );


};

THREE.OrbitControls.prototype = Object.create( THREE.EventDispatcher.prototype );