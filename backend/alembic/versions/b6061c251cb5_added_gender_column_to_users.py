"""Added gender column to users

Revision ID: b6061c251cb5
Revises: 95f8e3b01e40
Create Date: 2023-12-07 08:47:40.154054

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b6061c251cb5'
down_revision = '95f8e3b01e40'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('gender', sa.String(), nullable=False, server_default="MALE"))
    # ### end Alembic commands ###
    

def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'gender')
    # ### end Alembic commands ###
