import React from 'react'
import moment from 'moment'
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
  Collapse
} from '@mui/material'
import { type Comment } from '../../types/Post'
const CommentList = ({ comments }: { comments: Comment[] }) => {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const handleExpandClick = () => {
    setIsExpanded(!isExpanded)
  }
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="caption">
        {comments.length} Comentarios -{' '}
        {comments.length > 0 && (
          <Typography
            sx={{ fontWeight: 'bold', cursor: 'pointer' }}
            variant="caption"
            color="secondary"
            onClick={handleExpandClick}
          >
            {isExpanded ? 'Ocultar' : 'Mostrar'}
          </Typography>
        )}
      </Typography>
      <Collapse in={isExpanded}>
        <List>
          {comments.map((comment, i) => (
            <ListItem key={i}>
              <ListItemText
                primary={comment.content}
                secondary={
                  <Typography variant="caption" color="text.secondary">
                    {moment(comment.createdAt).calendar()}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </Box>
  )
}

export default CommentList
