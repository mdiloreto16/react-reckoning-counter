import React, { useState, useEffect } from 'react';
import { Grid, Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import firebase from 'firebase';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: 12,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function App() {
  var obj;
  var ghVar;
  let ghCountVar, srCountVar, bobCountVar, ouCountVar, ddCountVar, totalCountVar, noWeaponsCountVar;

  const [ghCount, updateGhCount] = useState(0);
  const [srCount, updateSrCount] = useState(0);
  const [bobCount, updateBobCount] = useState(0);
  const [ouCount, updateOuCount] = useState(0);
  const [ddCount, updateDdCount] = useState(0);
  const [totalCount, updateTotalCount] = useState(0);
  const [noWeaponsCount, updateNoWeaponsCount] = useState(0);

  var countRef = firebase.database().ref().child('counts');

  useEffect(() => {
    countRef.once('value').then(function (snap) {
      obj = snap.val();
      updateGhCount(snap.val().ghCount);
      updateSrCount(snap.val().srCount);
      updateBobCount(snap.val().bobCount);
      updateOuCount(snap.val().ouCount);
      updateDdCount(snap.val().ddCount);
      updateTotalCount(snap.val().totalCount);
      updateNoWeaponsCount(snap.val().noWeaponsCount);
    });
  }, []);

  function clearAll() {
    updateGhCount(0);
    updateSrCount(0);
    updateBobCount(0);
    updateOuCount(0);
    updateDdCount(0);
    updateTotalCount(0);
    updateNoWeaponsCount(0);

    countRef.update(dbObject);
  }

  var dbObject = {
    ghCount: ghCount,
    srCount: srCount,
    bobCount: bobCount,
    ouCount: ouCount,
    ddCount: ddCount,
    totalCount: totalCount,
    noWeaponsCount: noWeaponsCount
  }

  function saveAll(dataObj) {
    if(dataObj.ghCount === 0 && dataObj.srCount === 0 && dataObj.bobCount === 0 && dataObj.ouCount === 0 && dataObj.ddCount == 0 && dataObj.totalCount === 0 && dataObj.noWeaponsCount === 0){
      let varVar = 0;
    }
    else{
    countRef.update(dataObj);
    }
  }

  return (
    <React.Fragment>
      <Typography variant="h3" style={{ paddingLeft: "40px", paddingTop: "40px" }}>
        Drop Rate Percent Counter
      </Typography>
      <Grid container spacing={5}>
        <Grid container>
          <Table style={{ tableLayout: 'fixed', width: 920, marginLeft: 72, marginTop: 72 }}>
            <TableHead>
              <TableRow>
                <TableCell size="small">
                  <Typography>
                    Weapon Type
                  </Typography>
                </TableCell>
                <TableCell size="small">
                  <Typography>
                    Add Count
                  </Typography>
                </TableCell>
                <TableCell size="small">
                  <Typography>
                    Drops Recieved
                  </Typography>
                </TableCell>
                <TableCell size="small">
                  <Typography>
                    Drop Rate (%)
                  </Typography>
                </TableCell>
                <TableCell size="small">
                  <Typography>
                    Decrement Counter
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            <TableRow >
              <TableCell>
                <Typography>
                  Gnawing Hunger
                </Typography>
              </TableCell>
              <TableCell size={'small'}>
                <Button variant="contained" onClick={() => updateGhCount(ghCount+1)}>
                  Add
                </Button>
              </TableCell>
              <TableCell style={{ padding: '4px 16px' }}>
                {ghCount}
              </TableCell>
              <TableCell>
                {Number((ghCount/totalCount)*100).toFixed(2)}
              </TableCell>
              <TableCell size={'small'}>
                <Button variant="contained" onClick={() => updateGhCount(ghCount-1)}>
                  Remove
                </Button>
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell>
                <Typography>
                  Spare Rations
                </Typography>
              </TableCell>
              <TableCell size={'small'}>
                <Button variant="contained" onClick={() => updateSrCount(srCount+1)}>
                  Add
                </Button>
              </TableCell>
              <TableCell style={{ padding: '4px 16px' }}>
                {srCount}
              </TableCell>
              <TableCell>
                {Number((srCount/totalCount)*100).toFixed(2)}
              </TableCell>
              <TableCell size={'small'}>
                <Button variant="contained" onClick={() => updateSrCount(srCount-1)}>
                  Remove
                </Button>
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell>
                <Typography>
                  Bug-out Bag
                </Typography>
              </TableCell>
              <TableCell size={'small'}>
                <Button variant="contained" onClick={() => updateBobCount(bobCount+1)}>
                  Add
                </Button>
              </TableCell>
              <TableCell style={{ padding: '4px 16px' }}>
                {bobCount}
              </TableCell>
              <TableCell>
                {Number((bobCount/totalCount)*100).toFixed(2)}
              </TableCell>
              <TableCell size={'small'}>
                <Button variant="contained" onClick={() => updateBobCount(bobCount-1)}>
                  Remove
                </Button>
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell>
                <Typography>
                  Outlast
                </Typography>
              </TableCell>
              <TableCell size={'small'}>
                <Button variant="contained" onClick={() => updateOuCount(ouCount+1)}>
                  Add
                </Button>
              </TableCell>
              <TableCell style={{ padding: '4px 16px' }}>
                {ouCount}
              </TableCell>
              <TableCell>
                {Number((ouCount/totalCount)*100).toFixed(2)}
              </TableCell>
              <TableCell size={'small'}>
                <Button variant="contained" onClick={() => updateOuCount(ouCount-1)}>
                  Remove
                </Button>
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell>
                <Typography>
                  Doomsday
                </Typography>
              </TableCell>
              <TableCell size={'small'}>
                <Button variant="contained" onClick={() => updateDdCount(ddCount+1)}>
                  Add
                </Button>
              </TableCell>
              <TableCell style={{ padding: '4px 16px' }}>
                {ddCount}
              </TableCell>
              <TableCell>
                {Number((ddCount/totalCount)*100).toFixed(2)}
              </TableCell>
              <TableCell size={'small'}>
                <Button variant="contained" onClick={() => updateDdCount(ddCount-1)}>
                  Remove
                </Button>
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell>
                <Typography>
                  No Weapons
                </Typography>
              </TableCell>
              <TableCell size={'small'}>
                <Button variant="contained" onClick={() => updateNoWeaponsCount(noWeaponsCount+1)}>
                  Add
                </Button>
              </TableCell>
              <TableCell style={{ padding: '4px 16px' }}>
                {noWeaponsCount}
              </TableCell>
              <TableCell>
                {Number((noWeaponsCount/totalCount)*100).toFixed(2)}
              </TableCell>
              <TableCell size={'small'}>
                <Button variant="contained" onClick={() => updateNoWeaponsCount(noWeaponsCount-1)}>
                  Remove
                </Button>
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell>
                <Typography>
                  Total Clears
                </Typography>
              </TableCell>
              <TableCell size={'small'}>
                <Button variant="contained" onClick={() => updateTotalCount(totalCount+1)}>
                  Add
                </Button>
              </TableCell>
              <TableCell style={{ padding: '4px 16px' }}>
                {totalCount}
              </TableCell>
              <TableCell>
                
              </TableCell>
              <TableCell size={'small'}>
                <Button variant="contained" onClick={() => updateTotalCount(totalCount-1)}>
                  Remove
                </Button>
              </TableCell>
            </TableRow>
            </TableBody>
          </Table>
        </Grid>
        <Button variant="contained" onClick={clearAll} style={{ marginLeft: 72, marginTop: 20 }}>
            Clear All Fields
        </Button>
        <Button variant="contained" onClick={saveAll(dbObject)} style={{ marginLeft: 72, marginTop: 20 }}>
            Save to DB
        </Button>
      </Grid>
    </React.Fragment>
  );
}

export default App;

